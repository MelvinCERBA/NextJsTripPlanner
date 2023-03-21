import { Activity } from './ActivityLg';

export default {
  title: 'Components/Activity',
  component: Activity,
};

const Template = (args) => <Activity {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

