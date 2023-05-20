import { DateTime } from "luxon"

export const riksAge = Math.floor(DateTime.now().diff(DateTime.local(1988, 4, 7)).as("years"))
