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

const courses = [
    "B.Tech - Computer Science",
    "B.Tech - Information Technology",
    "B.Tech - Electronics",
    "B.Tech - Mechanical",
    "B.Tech - Civil",
    "M.Tech - Computer Science",
    "M.Tech - Electronics",
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

export function StudentForm({ onBack, onSubmit }) {
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
                                            {courses.map((course) => (
                                                <SelectItem key={course} value={course}>
                                                    {course}
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
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select semester" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {semesters.map((semester) => (
                                                <SelectItem key={semester} value={semester}>
                                                    {semester}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="batch">Batch Year</Label>
                                    <Input
                                        id="batch"
                                        name="batch"
                                        placeholder="e.g., 2020-2024"
                                        value={formData.batch || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="skills">Technical Skills</Label>
                                <Textarea
                                    id="skills"
                                    name="skills"
                                    placeholder="List your technical skills (e.g., Programming languages, tools, frameworks)"
                                    value={formData.skills || ""}
                                    onChange={handleChange}
                                    className="h-24"
                                />
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