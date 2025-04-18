import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const LessonList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source={"id"} />
        <TextField source={"title"} />
        <ReferenceField source="unitId" reference="courses" />
        <TextField source={"order"} />

      </Datagrid>
    </List>
  );
};
