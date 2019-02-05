import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { ConsultationService } from './consultation.service';

@Injectable()
export class QuestionService {
	proceduretypeid: any;
	procedureid: any;

	constructor(
		private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			this.proceduretypeid = +params.proceduretypeid;
			this.procedureid = +params.procedureid;
		});
	}

	getProcedureTypeId() {
		return this.proceduretypeid;
	}

	getProcedureId() {
		return this.procedureid;
	}

	// getProcedure(id:any) {
	// 	return this.consultationService.getConsultation(id);
	// }

	// getPdfLink() {
	// 	return this.tramiteService.getDocuments(this.procedureid);
	// }

	// downloadFile(id:any) {
	// 	return this.consultationService.downloadFile(id);
	// }

}