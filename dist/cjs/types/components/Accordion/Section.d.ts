import React from "react";
export interface ExternalSectionProps {
    heading: string;
}
interface InternalSectionProps extends ExternalSectionProps {
    index: number;
    isActive: boolean;
    setActiveIndex(index: number): void;
}
export declare const Section: React.FC<InternalSectionProps>;
export {};
