export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  step: number;
  type:string;
  pattern:string;
  minlength:number;
  maxlength:number;
  valid:number;
  input:string;
  action:string;
  parantid:number;
  disable:string;
  idgroup:number;

 
  constructor(options: {
     type?: string,
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      step?: number
      pattern?: string,
      minlength?: number,
      maxlength?: number,
      valid?: number,
      action?: string,
      parantid?: number,
      disable?: string, 
      idgroup?: number,
    } = {}) {

  //Logica para campos hijos (true:se muestra, false:se oculta)
   if(options.parantid!=0 && (options.action=='0'|| options.action=='3')){
    options.disable = 'false';
   }
   if(options.parantid!=0 && options.action=='1'){
    options.disable = 'true';
    //// console.log(options.key + " - " +  options.label +  " : " + options.disable);
   }
   if(options.parantid==0 && options.idgroup ==0){
    options.disable = 'true';
   // // console.log(options.key + " - " +  options.label +  " : " + options.disable);
   }
   if(options.idgroup != 0){
    options.disable = 'false';
   }

    this.type = options.type;  
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.step = options.step === undefined ? 1 : options.step;
    this.pattern = options.pattern == null ? "" : options.pattern;
    this.minlength = options.minlength === undefined ? 1 : options.minlength;
    this.maxlength = options.maxlength === undefined ? 50 : options.maxlength;
    this.valid = options.valid;
    this.action = options.action === undefined ? null : options.action;
    this.parantid = options.parantid === undefined ? null : options.parantid;
    this.disable = options.disable === undefined ? 'true' : options.disable;
    this.idgroup = options.idgroup === null ? 0 : options.idgroup;
  }
}