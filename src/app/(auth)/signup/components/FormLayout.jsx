"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function FormLayout({
    title,
    subtitle,
    children,
    onBack,
    onSubmit,
    submitText = "Create Account",
    isSubmitting = false
}) {
    return (
        <Card className="w-full max-w-2xl min-w-2xl p-6 shadow-lg animate-in fade-in-50 duration-500 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                        {title}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        {subtitle}
                    </p>
                </div>

                <Separator className="my-4" />

                {/* Form */}
                <form onSubmit={onSubmit} className="space-y-8">
                    {children}

                    <Separator className="my-4" />

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-2">
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={onBack}
                            className="text-gray-500"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 cursor-pointer" />
                            Back
                        </Button>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-md hover:shadow-lg"
                        >
                            {isSubmitting ? "Creating Account..." : submitText}
                        </Button>
                    </div>
                </form>
            </div>
        </Card>
    );
} 