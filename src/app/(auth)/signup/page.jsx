"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, UserCog, ArrowRight, ArrowLeft, Code2, Sparkles } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { clsx } from "clsx";
import { OnboardingForm } from "./components/OnboardingForm";

const roles = [
    {
        id: "student",
        title: "Student",
        description: "Join as a student to access courses and learning materials",
        icon: GraduationCap,
    },
    {
        id: "faculty",
        title: "Faculty",
        description: "Join as a faculty member to create and manage courses",
        icon: UserCog,
    },
    {
        id: "guest",
        title: "Guest",
        description: "Browse and explore available content",
        icon: Users,
    },
];

const RoleCard = ({ role, isSelected, onSelect }) => {
    const Icon = role.icon;

    return (
        <Card
            className={`relative p-6 cursor-pointer transition-all duration-200 ${isSelected
                ? "border-primary/50 bg-primary/5 shadow-lg"
                : "hover:border-gray-400 hover:shadow-md"
                }`}
            onClick={() => onSelect(role.id)}
        >
            <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${isSelected ? "bg-primary/10" : "bg-gray-100 dark:bg-gray-800"
                    }`}>
                    <Icon className={`w-6 h-6 ${isSelected ? "text-primary" : "text-gray-600 dark:text-gray-400"
                        }`} />
                </div>
                <div className="space-y-1">
                    <h3 className={`font-semibold ${isSelected ? "text-primary" : "text-gray-900 dark:text-gray-100"
                        }`}>
                        {role.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {role.description}
                    </p>
                </div>
            </div>
            {isSelected && (
                <motion.div
                    layoutId="selectedBorder"
                    className="absolute inset-0 border-2 border-primary rounded-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
        </Card>
    );
};

const BrandPanel = () => {
    return (
        <div className="relative hidden lg:flex flex-col items-center justify-center w-1/2 bg-gradient-to-br from-background via-background to-background/95 dark:from-background dark:via-background/95 dark:to-background/90 p-8 text-foreground overflow-hidden border-r border-border/5">
            {/* Premium Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, currentColor 1px, transparent 1px),
                        linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: '44px 44px',
                }}
            />

            {/* Geometric Shapes */}
            <div className="absolute inset-0">
                <div className="absolute top-[10%] right-[20%] w-24 h-24 border border-primary/10 rounded-xl rotate-12 dark:border-primary/20" />
                <div className="absolute bottom-[20%] left-[15%] w-32 h-32 border border-primary/10 rounded-full dark:border-primary/20" />
                <div className="absolute top-[40%] left-[25%] w-16 h-16 border border-primary/10 rounded-lg -rotate-12 dark:border-primary/20" />
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.2, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[20%] -left-4 w-40 h-40 bg-gradient-to-r from-primary/10 via-primary/5 to-blue-500/10 dark:from-primary/20 dark:via-primary/10 dark:to-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-[30%] -right-4 w-48 h-48 bg-gradient-to-l from-primary/10 via-violet-500/5 to-purple-500/10 dark:from-primary/20 dark:via-violet-500/10 dark:to-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.1, 0.2]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute top-[60%] left-[20%] w-36 h-36 bg-gradient-to-tr from-blue-500/10 via-primary/5 to-purple-500/10 dark:from-blue-500/20 dark:via-primary/10 dark:to-purple-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/20 dark:from-transparent dark:via-background/10 dark:to-background/40" />

            {/* Content */}
            <div className="relative space-y-10 text-center max-w-md">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center space-x-3"
                >

                    <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground dark:from-foreground dark:via-primary dark:to-foreground bg-clip-text text-transparent">

                        <span className="text-brand-primary">SDIET</span>
                        <span className="text-brand-secondary">Techies</span>

                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                >
                    <p className="text-xl font-light text-muted-foreground">
                        Join our community of tech enthusiasts and learners
                    </p>
                    <div className="inline-flex items-center justify-center space-x-2 text-sm px-6 py-2.5 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10 rounded-full border border-primary/10 dark:border-primary/20 shadow-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-primary font-medium">Where Innovation Meets Education</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="grid grid-cols-2 gap-6 pt-8"
                >
                    {[
                        { number: "500+", label: "Active Students", icon: Users },
                        { number: "50+", label: "Expert Faculty", icon: UserCog },
                        { number: "100+", label: "Courses", icon: GraduationCap },
                        { number: "24/7", label: "Support", icon: Sparkles }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                            className="group relative space-y-2 p-4 rounded-2xl bg-gradient-to-br from-card via-card to-card/95 dark:from-card dark:via-card/95 dark:to-card/90 border border-border/5 shadow-sm hover:shadow-md hover:border-border/10 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 dark:from-primary/10 dark:to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                            <div className="flex items-center justify-center">
                                <stat.icon className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary/70 transition-colors duration-300" />
                            </div>
                            <div className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-blue-600/90 transition-all duration-300">
                                {stat.number}
                            </div>
                            <div className="text-sm text-muted-foreground font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default function Signup() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [step, setStep] = useState(1);
    const { warning, success } = useToast();

    const handleContinue = (e) => {
        if (!selectedRole) {
            e.preventDefault();
            warning("Please select a role to continue", {
                description: "Choose how you'd like to join our platform"
            });
            return;
        }
        setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = (formData) => {
        // Here you would typically send the data to your API
        console.log('Form submitted:', { role: selectedRole, ...formData });
        success("Account created successfully!", {
            description: "Welcome to SDIETTechies!"
        });
        // Redirect to dashboard or verification page
    };

    return (
        <div className="min-h-screen flex">
            <BrandPanel />

            <div className="flex-1 flex items-center justify-center p-4 lg:p-8 bg-gray-50 dark:bg-gray-900">
                <AnimatePresence mode="wait">
                    {step === 1 ? (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-xl space-y-8"
                        >
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                                    Create Your Account
                                </h1>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Choose how you'd like to join our platform
                                </p>
                            </div>

                            <div className="grid gap-4">
                                {roles.map((role) => (
                                    <RoleCard
                                        key={role.id}
                                        role={role}
                                        isSelected={selectedRole === role.id}
                                        onSelect={setSelectedRole}
                                    />
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4">
                                <Button
                                    variant="ghost"
                                    className="text-gray-500"
                                    asChild
                                >
                                    <Link href="/">
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Back to Home
                                    </Link>
                                </Button>

                                <Button
                                    onClick={handleContinue}
                                    disabled={!selectedRole}
                                    className={clsx(
                                        "relative overflow-hidden transition-all duration-200",
                                        selectedRole
                                            ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-md hover:shadow-lg"
                                            : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800"
                                    )}
                                >
                                    Continue
                                    <ArrowRight className={clsx(
                                        "w-4 h-4 ml-2 transition-transform duration-200",
                                        selectedRole && "group-hover:translate-x-0.5"
                                    )} />
                                    {!selectedRole && (
                                        <span className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-gray-100/30 dark:from-gray-800/50 dark:to-gray-800/30" />
                                    )}
                                </Button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <OnboardingForm
                                role={selectedRole}
                                onBack={handleBack}
                                onSubmit={handleSubmit}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

