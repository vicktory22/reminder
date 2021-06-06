export type ServerResponse = {
  status?: number;
  statusText?: string;
  body?: string;
};

export type ParsedRequest = {
  signature?: string;
  timestamp?: number;
  body?: string;
  error?: Error;
};
