"use client";

import { useState } from "react";
import { FormLayout } from "./FormLayout";
import { CommonFields } from "./CommonFields";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { EmailVerification } from "./EmailVerification";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const courses = [
    // 4-year courses
    {
        name: "B.Tech - Computer Science & Engineering",
        duration: 4,
        category: "Engineering"
    },
    {
        name: "B.Tech - Information Technology",
        duration: 4,
        category: "Engineering"
    },
    {
        name: "B.Tech - Electronics & Communication",
        duration: 4,
        category: "Engineering"
    },
    {
        name: "B.Tech - Artificial Intelligence & ML",
        duration: 4,
        category: "Engineering"
    },
    {
        name: "B.Tech - Data Science",
        duration: 4,
        category: "Engineering"
    },
    // 3-year courses
    {
        name: "BCA - Bachelor of Computer Applications",
        duration: 3,
        category: "Computer Applications"
    },
    {
        name: "BCA - Data Science & Analytics",
        duration: 3,
        category: "Computer Applications"
    },
    {
        name: "BCA - Cloud Computing & DevOps",
        duration: 3,
        category: "Computer Applications"
    },
    {
        name: "BBA - Digital Marketing",
        duration: 3,
        category: "Business"
    },
    {
        name: "BBA - IT Management",
        duration: 3,
        category: "Business"
    },
    {
        name: "BSc - Computer Science",
        duration: 3,
        category: "Science"
    },
    {
        name: "BSc - Data Analytics",
        duration: 3,
        category: "Science"
    }
];

const semesters = Array.from({ length: 8 }, (_, i) => `Semester ${i + 1}`);

const STEPS = {
    PERSONAL: 0,
    ACADEMIC: 1,
    VERIFICATION: 2,
};

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

const generateBatchYears = (courseDuration) => {
    if (!courseDuration) return [];

    const currentYear = new Date().getFullYear();
    const batchYears = [];

    // Generate batches for current year and 4 years back
    for (let startYear = currentYear; startYear >= currentYear - 4; startYear--) {
        batchYears.push({
            label: `${startYear} - ${startYear + courseDuration}`, // Show range based on course duration
            value: startYear.toString() // Pass only the starting year
        });
    }

    return batchYears;
};

export function StudentForm({ onBack, onSubmit }) {
    const [step, setStep] = useState(STEPS.PERSONAL);
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [courseDuration, setCourseDuration] = useState(null);
    const [skillInput, setSkillInput] = useState("");
    const { toast } = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSkillInputChange = (e) => {
        setSkillInput(e.target.value);
    };

    const handleSkillInputKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addSkill();
        }
    };

    const addSkill = () => {
        const trimmedSkill = skillInput.trim().replace(/,/g, '');
        if (trimmedSkill) {
            const currentSkills = formData.skills ? formData.skills.split(',').filter(Boolean) : [];
            if (!currentSkills.includes(trimmedSkill)) {
                const newSkills = [...currentSkills, trimmedSkill].join(',');
                setFormData(prev => ({ ...prev, skills: newSkills }));
            }
            setSkillInput('');
        }
    };

    const removeSkill = (skillToRemove) => {
        const currentSkills = formData.skills ? formData.skills.split(',').filter(Boolean) : [];
        const newSkills = currentSkills.filter(skill => skill !== skillToRemove).join(',');
        setFormData(prev => ({ ...prev, skills: newSkills }));
    };

    const handleSelectChange = (name, value) => {
        if (name === "course") {
            const selectedCourse = courses.find(course => course.name === value);
            setCourseDuration(selectedCourse.duration);
            // Reset batch if course changes
            setFormData(prev => ({ ...prev, [name]: value, batch: "" }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    // Get available semesters based on course duration
    const getAvailableSemesters = () => {
        if (!courseDuration) return [];
        return Array.from({ length: courseDuration * 2 }, (_, i) => `Semester ${i + 1}`);
    };

    const handlePersonalSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match", {
                description: "Please make sure your passwords match"
            });
            return;
        }
        setStep(STEPS.ACADEMIC);
    };

    const handleAcademicSubmit = async (e) => {
        e.preventDefault();
        setStep(STEPS.VERIFICATION);
        toast.success("Verification code sent", {
            description: "Please check your email for the verification code"
        });
    };

    const handleVerificationSubmit = async (otp) => {
        try {
            await onSubmit({ ...formData, otp });
        } catch (error) {
            toast.error("Verification failed", {
                description: "Please try again or request a new code"
            });
            throw error;
        }
    };

    const handleStepBack = () => {
        if (step === STEPS.ACADEMIC) {
            setStep(STEPS.PERSONAL);
        } else if (step === STEPS.VERIFICATION) {
            setStep(STEPS.ACADEMIC);
        } else {
            onBack();
        }
    };

    return (
        <AnimatePresence mode="wait">
            {step === STEPS.VERIFICATION ? (
                <motion.div
                    key="verification"
                    {...fadeIn}
                >
                    <EmailVerification
                        email={formData.email}
                        onBack={handleStepBack}
                        onSubmit={handleVerificationSubmit}
                    />
                </motion.div>
            ) : step === STEPS.PERSONAL ? (
                <motion.div
                    key="personal"
                    {...fadeIn}
                >
                    <FormLayout
                        title="Personal Information"
                        subtitle="Tell us about yourself"
                        onBack={handleStepBack}
                        onSubmit={handlePersonalSubmit}
                        submitText="Next"
                    >
                        <CommonFields formData={formData} onChange={handleChange} />
                    </FormLayout>
                </motion.div>
            ) : (
                <motion.div
                    key="academic"
                    {...fadeIn}
                >
                    <FormLayout
                        title="Academic Information"
                        subtitle="Tell us about your academic details"
                        onBack={handleStepBack}
                        onSubmit={handleAcademicSubmit}
                        submitText="Continue to Verification"
                    >
                        <div className="space-y-4">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="rollNumber">Roll Number</Label>
                                    <Input
                                        id="rollNumber"
                                        name="rollNumber"
                                        placeholder="Your college roll number"
                                        value={formData.rollNumber || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="course">Course</Label>
                                    <Select
                                        value={formData.course || ""}
                                        onValueChange={(value) => handleSelectChange("course", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your course" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.values(courses).map((course) => (
                                                <SelectItem key={course.name} value={course.name}>
                                                    {course.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="semester">Current Semester</Label>
                                    <Select
                                        value={formData.semester || ""}
                                        onValueChange={(value) => handleSelectChange("semester", value)}
                                        disabled={!courseDuration}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder={courseDuration ? "Select semester" : "Select course first"} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {getAvailableSemesters().map((semester) => (
                                                <SelectItem key={semester} value={semester}>
                                                    {semester}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="batch">Batch Year</Label>
                                    <Select
                                        value={formData.batch || ""}
                                        onValueChange={(value) => handleSelectChange("batch", value)}
                                        disabled={!courseDuration}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder={courseDuration ? "Select your batch" : "Select course first"} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {generateBatchYears(courseDuration).map((batch) => (
                                                <SelectItem key={batch.value} value={batch.value}>
                                                    {batch.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="skills">Technical Skills</Label>
                                <div className="space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        <AnimatePresence>
                                            {formData.skills && formData.skills.split(',').filter(Boolean).map((skill) => (
                                                <motion.div
                                                    key={skill}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    className="group flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                                >
                                                    {skill}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeSkill(skill)}
                                                        className="opacity-50 hover:opacity-100 transition-opacity"
                                                    >
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    </div>
                                    <Input
                                        id="skillInput"
                                        value={skillInput}
                                        onChange={handleSkillInputChange}
                                        onKeyDown={handleSkillInputKeyDown}
                                        onBlur={addSkill}
                                        placeholder="Type a skill and press Enter or comma to add"
                                        className="mt-2"
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Press Enter or comma after each skill
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="interests">Areas of Interest</Label>
                                <Textarea
                                    id="interests"
                                    name="interests"
                                    placeholder="What topics or areas are you interested in learning?"
                                    value={formData.interests || ""}
                                    onChange={handleChange}
                                    className="h-24"
                                />
                            </div>
                        </div>
                    </FormLayout>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 