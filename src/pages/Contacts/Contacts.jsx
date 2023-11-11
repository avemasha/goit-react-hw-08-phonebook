import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { ContactsList } from 'components/Contacts/ContactsList';
import { FilterForm } from 'components/Filter/FilterForm';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { Section } from 'components/SectionWithTitle/SectionWithTitle';


export default function Contacts() {
    return (
      <div
        style={{
          width: '1000px',
          margin: '0 auto',
          padding: '0 50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MainTitle />
        <PhonebookForm />
        <FilterForm />
        <Section title="Contacts">
          <ContactsList />
        </Section>
      </div>
    );
  }