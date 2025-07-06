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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { EmailVerification } from "./EmailVerification";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const departments = [
    "Computer Science & Engineering",
    "Information Technology",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Applied Sciences",
    "Management Studies",
];

const designations = [
    "Professor",
    "Associate Professor",
    "Assistant Professor",
    "Visiting Faculty",
    "Research Associate",
    "Lab Instructor",
];

const STEPS = {
    PERSONAL: 0,
    PROFESSIONAL: 1,
    VERIFICATION: 2,
};

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export function FacultyForm({ onBack, onSubmit }) {
    const [step, setStep] = useState(STEPS.PERSONAL);
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePersonalSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match", {
                description: "Please make sure your passwords match"
            });
            return;
        }
        setStep(STEPS.PROFESSIONAL);
    };

    const handleProfessionalSubmit = async (e) => {
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
        if (step === STEPS.PROFESSIONAL) {
            setStep(STEPS.PERSONAL);
        } else if (step === STEPS.VERIFICATION) {
            setStep(STEPS.PROFESSIONAL);
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
                    key="professional"
                    {...fadeIn}
                >
                    <FormLayout
                        title="Professional Information"
                        subtitle="Tell us about your professional background"
                        onBack={handleStepBack}
                        onSubmit={handleProfessionalSubmit}
                        submitText="Continue to Verification"
                    >
                        <div className="space-y-4">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="employeeId">Employee ID</Label>
                                    <Input
                                        id="employeeId"
                                        name="employeeId"
                                        placeholder="Your employee ID"
                                        value={formData.employeeId || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="department">Department</Label>
                                    <Select
                                        value={formData.department || ""}
                                        onValueChange={(value) => handleSelectChange("department", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select your department" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {departments.map((dept) => (
                                                <SelectItem key={dept} value={dept}>
                                                    {dept}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="designation">Designation</Label>
                                    <Select
                                        value={formData.designation || ""}
                                        onValueChange={(value) => handleSelectChange("designation", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select designation" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {designations.map((designation) => (
                                                <SelectItem key={designation} value={designation}>
                                                    {designation}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="joiningDate">Joining Date</Label>
                                    <Input
                                        id="joiningDate"
                                        name="joiningDate"
                                        type="date"
                                        value={formData.joiningDate || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="specialization">Areas of Specialization</Label>
                                <Textarea
                                    id="specialization"
                                    name="specialization"
                                    placeholder="List your areas of specialization and expertise"
                                    value={formData.specialization || ""}
                                    onChange={handleChange}
                                    className="h-24"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="research">Research Interests</Label>
                                <Textarea
                                    id="research"
                                    name="research"
                                    placeholder="Describe your research interests and ongoing projects"
                                    value={formData.research || ""}
                                    onChange={handleChange}
                                    className="h-24"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="publications">Publications & Achievements</Label>
                                <Textarea
                                    id="publications"
                                    name="publications"
                                    placeholder="List your key publications, patents, or other academic achievements"
                                    value={formData.publications || ""}
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