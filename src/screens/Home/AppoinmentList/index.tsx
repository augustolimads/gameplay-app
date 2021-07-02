import React from "react";
import { Spacer } from "src/components/Spacer";
import { Appointment } from "../Appointment";
import * as S from "./styles";
import { appointments } from "src/utils/appointments.mock";

export function AppointmentList() {
  const Separator = () => <Spacer isHorizontal size={2} />;

  return (
    <S.Container>
      <S.ListHeader>
        <S.HeaderTitle>Partidas agendadas</S.HeaderTitle>
        <S.HeaderTotal>Total 6</S.HeaderTotal>
      </S.ListHeader>
      <Appointment data={appointments[0]} />
      {/* <S.FlatList
        // ListHeaderComponent={}
        data={appointments}
        renderItem={({ item }) => <Appointment data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
      /> */}
    </S.Container>
  );
}
