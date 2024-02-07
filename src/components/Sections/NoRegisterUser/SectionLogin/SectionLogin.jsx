import Section from 'components/SectionWraps/Sections/Section';

import FormLogin from 'components/Forms/FormLogin/FormLogin/FormLogin';

export default function SectionLogin() {
  return (
    <>
      <Section containerSection={'container-login'}>
        <FormLogin />
      </Section>
    </>
  );
}
