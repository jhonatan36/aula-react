import SafeEnvironment from "ui/components/feeback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={"Preencha o endereço e localize profissionais"}
      />

      <UserInformation
        name={"Jhonatan"}
        picture={"https://github.com/jhonatan36.png"}
        rating={3}
        description={"Minas Gerais"}
      />

      <UserInformation
        name={"Fabio"}
        picture={""}
        rating={2}
        description={"São Paulo"}
      />
    </div>
  );
}
