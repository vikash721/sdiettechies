"use client";

import { useState, useEffect } from "react";
import { FormLayout } from "./FormLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MailCheck, RefreshCw } from "lucide-react";

export function EmailVerification({ email, onBack, onSubmit }) {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resendTimer, setResendTimer] = useState(30);
    const { toast } = useToast();

    useEffect(() => {
        const timer = resendTimer > 0 && setInterval(() => setResendTimer(prev => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [resendTimer]);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Move to next input if current field is filled
        if (element.value && index < 5) {
            const nextInput = element.parentElement.nextElementSibling?.querySelector('input');
            if (nextInput) nextInput.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Move to previous input on backspace if current field is empty
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = e.target.parentElement.previousElementSibling?.querySelector('input');
            if (prevInput) prevInput.focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpString = otp.join("");

        if (otpString.length !== 6) {
            toast.error("Invalid OTP", {
                description: "Please enter all 6 digits of the verification code"
            });
            return;
        }

        setIsSubmitting(true);
        try {
            await onSubmit(otpString);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleResendOTP = () => {
        // Here you would typically call your API to resend the OTP
        toast.success("Verification code resent", {
            description: "Please check your email for the new code"
        });
        setResendTimer(30);
    };

    return (
        <FormLayout
            title="Verify Your Email"
            subtitle={`We've sent a verification code to ${email}`}
            onBack={onBack}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitText="Verify Email"
        >
            <div className="space-y-6">
                <div className="flex justify-center">
                    <div className="rounded-full bg-primary/10 p-3">
                        <MailCheck className="h-6 w-6 text-primary" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="text-center block">Enter Verification Code</Label>
                    <div className="flex gap-2 justify-center">
                        {otp.map((digit, index) => (
                            <div key={index} className="w-12">
                                <Input
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className="text-center text-lg font-semibold"
                                    autoFocus={index === 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <Button
                        type="button"
                        variant="ghost"
                        className="text-sm text-muted-foreground"
                        disabled={resendTimer > 0}
                        onClick={handleResendOTP}
                    >
                        {resendTimer > 0 ? (
                            <>
                                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                Resend code in {resendTimer}s
                            </>
                        ) : (
                            "Resend verification code"
                        )}
                    </Button>
                </div>
            </div>
        </FormLayout>
    );
} 