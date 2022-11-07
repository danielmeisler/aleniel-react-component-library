import React from 'react';
import type { Story } from "@ladle/react";
import { Accordion } from '..';

export const Default: Story<{
  isOpen: boolean;
  title: string;
  content: string;
}> = ({ isOpen, title, content }) => <Accordion isOpen={isOpen} title={title} content={content}></Accordion>

Default.args = {
  isOpen: false,
  title: "Titel",
  content: "Inhalt"
};

export const Opened = () => <Accordion isOpen={true} title="Titel" content='Test'></Accordion>
