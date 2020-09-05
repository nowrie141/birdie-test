import * as React from 'react';
export function ListElement(props: {
  id: string;
  event_type: string;
  visit_id: string;
  timestamp: string;
  caregiver_id: string;
  care_recipient_id: string;
  mood?: string;
}) {

  function parseDate(input: string) {
    let parts = input.split('T');
    let YearMonthDay: string[] = parts[0].split('-');
    parts[1] = parts[1].replace('Z', '');
    let HoursMinutesSeconds: string[] = parts[1].split['.'];

    // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    console.log(parts[0], parts[1], YearMonthDay, HoursMinutesSeconds);
    return input;
  }

  return (
    <li>
      {props.id}
      <ul>
        <li>{props.event_type}</li>
        <li>{props.visit_id}</li>
        <li>{parseDate(props.timestamp)}</li>
        <li>{props.caregiver_id}</li>
        <li>{props.care_recipient_id}</li>
        <li>{props.mood}</li>
      </ul>
    </li>
  );
}
