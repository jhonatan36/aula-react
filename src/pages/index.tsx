import Head from 'next/head'
import SafeEnvironment from 'ui/components/feeback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

export default function Home() {
  return (
    <div>
      Olá mundo!
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
      />
    </div>
  );
}
