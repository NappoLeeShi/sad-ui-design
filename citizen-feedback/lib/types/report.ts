/** Shared domain types for the mock reporting prototype. */

export type ReportCategory = "individual" | "infrastructure";

export type ReportStatus =
  | "submitted"
  | "received"
  | "processing"
  | "completed";

export interface MockUserProfile {
  id: string;
  fullName: string;
  citizenId: string;
  permanentAddress: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  accountLevel: string;
  initials: string;
}

export interface ReportReporter {
  fullName: string;
  citizenId: string;
  permanentAddress: string;
}

export interface ReportEvidence {
  id: string;
  name: string;
  type: string;
  size: number;
  dataUrl: string;
}

export interface ReportLocation {
  address: string;
  lat?: number;
  lng?: number;
  source?: "manual" | "map" | "geolocation";
  unknown?: boolean;
}

export interface ReportStatusEvent {
  status: ReportStatus;
  at: string;
  note?: string;
}

export type ReportSubjectType = "individual" | "organization" | "unknown";

export interface IndividualReportDetails {
  organizationName?: string;
  representativeRole?: string;
  subjectType: ReportSubjectType;
  subjectName?: string;
  subjectIdentifier?: string;
  subjectAddress?: string;
  subjectDescription?: string;
  behaviorType: string;
  behaviorOther?: string;
  occurredAt?: string;
  timeUnknown: boolean;
  locationUnknown: boolean;
}

export interface InfrastructureReportDetails {
  infrastructureType: string;
  infrastructureTypeOther?: string;
  issueType: string;
  severity?: string;
}

export interface ReportRecordBase {
  id: string;
  code: string;
  title: string;
  description: string;
  submittedAt: string;
  status: ReportStatus;
  statusUpdatedAt: string;
  reporter: ReportReporter;
  location?: ReportLocation;
  evidence: ReportEvidence[];
  timeline: ReportStatusEvent[];
}

export interface IndividualReportRecord extends ReportRecordBase {
  category: "individual";
  details: IndividualReportDetails;
}

export interface InfrastructureReportRecord extends ReportRecordBase {
  category: "infrastructure";
  details: InfrastructureReportDetails;
}

export type ReportRecord = IndividualReportRecord | InfrastructureReportRecord;

export type NewReportInput =
  | {
      category: "individual";
      title: string;
      description: string;
      details: IndividualReportDetails;
      location?: ReportLocation;
      evidence?: ReportEvidence[];
    }
  | {
      category: "infrastructure";
      title: string;
      description: string;
      details: InfrastructureReportDetails;
      location?: ReportLocation;
      evidence?: ReportEvidence[];
    };

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
}

export interface ReportOptions {
  evidence: {
    maxImages: number;
    maxSizeMb: number;
    acceptedTypes: string[];
  };
  individual: {
    subjectTypes: SelectOption[];
    behaviors: SelectOption[];
  };
  infrastructure: {
    types: SelectOption[];
    issues: SelectOption[];
    severities: SelectOption[];
  };
}

export interface CreateReportResult {
  record: ReportRecord;
  persisted: boolean;
}
