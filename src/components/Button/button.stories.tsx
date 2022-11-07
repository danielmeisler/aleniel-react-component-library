import React from 'react';
import type { Story } from "@ladle/react";
import { Button } from '..';

export const Default: Story<{
  label: string;
}> = ({ label }) => <Button label={label} />

Default.args = {
  label: "Label"
};
