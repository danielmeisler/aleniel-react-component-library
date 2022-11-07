import React from 'react';
import type { Story } from "@ladle/react";
import { Accordion as Acc } from './../lib/src/components/';

export const Default = () => <Acc isOpen={false} title="Titel" content='Test'></Acc>
export const AccordionOpen = () => <Acc isOpen={true} title="Titel" content='Test'></Acc>


export const AccordionWithControls: Story<{
  isOpen: boolean;
  title: string;
  content: string;
}> = ({ isOpen, title, content }) => <Acc isOpen={isOpen} title={title} content={content}></Acc>


AccordionWithControls.args = {
  isOpen: false,
  title: "Titel",
  content: "Inhalt"
};
