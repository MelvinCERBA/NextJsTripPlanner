import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  alternate: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  alternate: true
};