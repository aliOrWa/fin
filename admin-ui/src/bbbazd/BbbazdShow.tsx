import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BbbazdShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ahmed" source="ahmed" />
        <TextField label="username" source="username" />
        <TextField label="dzadzad+" source="dzadzad" />
      </SimpleShowLayout>
    </Show>
  );
};
