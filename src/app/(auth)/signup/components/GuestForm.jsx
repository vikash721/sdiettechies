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

const purposes = [
    "Research",
    "Collaboration",
    "Workshop Attendance",
    "Event Participation",
    "Campus Visit",
    "Other",
];

const STEPS = {
    PERSONAL: 0,
    VISIT_INFO: 1,
    VERIFICATION: 2,
};

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeInOut" }
};

export function GuestForm({ onBack, onSubmit }) {
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
        setStep(STEPS.VISIT_INFO);
    };

    const handleVisitInfoSubmit = async (e) => {
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
        if (step === STEPS.VISIT_INFO) {
            setStep(STEPS.PERSONAL);
        } else if (step === STEPS.VERIFICATION) {
            setStep(STEPS.VISIT_INFO);
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
                    key="visit-info"
                    {...fadeIn}
                >
                    <FormLayout
                        title="Visit Information"
                        subtitle="Tell us about your visit"
                        onBack={handleStepBack}
                        onSubmit={handleVisitInfoSubmit}
                        submitText="Continue to Verification"
                    >
                        <div className="space-y-4">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="organization">Organization</Label>
                                    <Input
                                        id="organization"
                                        name="organization"
                                        placeholder="Your organization or institution"
                                        value={formData.organization || ""}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="designation">Designation</Label>
                                    <Input
                                        id="designation"
                                        name="designation"
                                        placeholder="Your role or designation"
                                        value={formData.designation || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="visitPurpose">Purpose of Visit</Label>
                                    <Select
                                        value={formData.visitPurpose || ""}
                                        onValueChange={(value) => handleSelectChange("visitPurpose", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select purpose" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {purposes.map((purpose) => (
                                                <SelectItem key={purpose} value={purpose}>
                                                    {purpose}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="visitDuration">Expected Duration</Label>
                                    <Input
                                        id="visitDuration"
                                        name="visitDuration"
                                        placeholder="e.g., 2 days, 1 week"
                                        value={formData.visitDuration || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="interests">Areas of Interest</Label>
                                <Textarea
                                    id="interests"
                                    name="interests"
                                    placeholder="What topics or areas are you interested in exploring?"
                                    value={formData.interests || ""}
                                    onChange={handleChange}
                                    className="h-24"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="additionalInfo">Additional Information</Label>
                                <Textarea
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    placeholder="Any additional information you'd like to share"
                                    value={formData.additionalInfo || ""}
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