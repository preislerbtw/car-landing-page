export interface Marca {
  codigo: string;
  nome: string;
}

export interface Modelo {
  codigo: number;
  nome: string;
}

export interface ModelosResponse {
  modelos: Modelo[];
  anos: AnoResumido[];
}

export interface AnoResumido {
  codigo: string; // ex: "2014-3"
  nome: string; // ex: "2014 Diesel"
}

export interface VehicleDetails {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}
