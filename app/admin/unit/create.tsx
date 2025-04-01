import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source={"title"} validate={[required()]} label="Title" />
        <TextInput
          source={"imageSrc"}
          validate={[required()]}
          label="Description"
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="input" validate={[required()]} label="Order" />
      </SimpleForm>
    </Create>
  );
};
