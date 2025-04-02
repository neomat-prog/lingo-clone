import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UnitEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source={"id"} validate={[required()]} label="Id" />

        <TextInput source={"title"} validate={[required()]} label="Title" />
        <TextInput
          source={"imageSrc"}
          validate={[required()]}
          label="Description"
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="input" validate={[required()]} label="Order" />
      </SimpleForm>
    </Edit>
  );
};
