import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const UnitList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source={"id"} />
        <TextField source={"title"} />
        <TextField source={"imageSrc"} />
        <ReferenceField source="courseId" reference="courses" />
        <TextField source={"order"} />

      </Datagrid>
    </List>
  );
};
