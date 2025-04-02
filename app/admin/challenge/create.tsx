import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput
          source={"question"}
          validate={[required()]}
          label="Question"
        />
        <SelectInput
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
          validate={[required()]}
        />
        <TextInput
          source={"lessonId"}
          validate={[required()]}
          label="lessons"
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="input" validate={[required()]} label="Order" />
      </SimpleForm>
    </Create>
  );
};
