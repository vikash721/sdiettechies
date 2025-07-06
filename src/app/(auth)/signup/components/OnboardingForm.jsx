"use client";

import { StudentForm } from "./StudentForm";
import { FacultyForm } from "./FacultyForm";
import { GuestForm } from "./GuestForm";

export function OnboardingForm({ role, onBack, onSubmit }) {
    const FormComponent = {
        student: StudentForm,
        faculty: FacultyForm,
        guest: GuestForm,
    }[role];

    if (!FormComponent) {
        return null;
    }

    return <FormComponent onBack={onBack} onSubmit={onSubmit} />;
} 