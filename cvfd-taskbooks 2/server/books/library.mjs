// The task book library. Only the hub (with the PIN) and members holding an assigned
// access code can read these; they are not published as public files.
//
// To add a book: put its file in this folder, then add one import line and its name to the list.
import probationaryPhaseBook from './probationary-phase-book.mjs';
import eoFastTrackPacket from './eo-fast-track-packet.mjs';
import lieutenantQualificationTaskBook from './lieutenant-qualification-task-book.mjs';
import lieutenantMiniAcademyWorkbook from './lieutenant-mini-academy-workbook.mjs';

export default [
  probationaryPhaseBook,
  eoFastTrackPacket,
  lieutenantQualificationTaskBook,
  lieutenantMiniAcademyWorkbook,
];
