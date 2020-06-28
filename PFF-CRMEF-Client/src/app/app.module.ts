import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { NgbModal, NgbModalConfig, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AgmCoreModule } from '@agm/core';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { NotificationsComponent } from './pages/notifications/notifications.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { VacanceService } from './services/vacance.service';
import { ServiceStagiaireService } from './services/stagiaire.service';
import { FormateurService } from './services/formateur.service';
import { DepartementService } from './services/departement.service';
import { BibliothequeService } from './services/bibliotheque.service';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsComponent } from './pages/gestion-stagiaires/liste-stagiaire/forms.component';
import { AjouterStagiaireComponent } from './pages/gestion-stagiaires/ajouter-stagiaire/ajouter-stagiaire.component';
import { AjouterFormateurComponent } from './pages/gestion-formateur/ajouter-formateur/ajouter-formateur.component';
import { ListeFormateurComponent } from './pages/gestion-formateur/liste-formateur/liste-formateur.component';
import { ListeReclamationsComponent } from './pages/gestion-reclamations/liste-reclamations.component';
import { DetailsStagiaireComponent } from './pages/gestion-stagiaires/details-stagiaire/details-stagiaire.component';
import { PlansFormationComponent } from './pages/plans-formation/plans-formation.component';
import { ModifierStagiaireComponent } from './pages/gestion-stagiaires/modifier-stagiaire/modifier-stagiaire.component';
import { StagiaireFilterPipe } from './pages/gestion-stagiaires/pipe/stagiaire-filter.pipe';
import { BibliothequeComponent } from './pages/gestion-bibliotheques/liste-livres/bibliotheque.component';
import { AjouterDepartementComponent } from './pages/gestion-departements/ajouter-departement/ajouter-departement.component';
import { ModifierDepartementComponent } from './pages/gestion-departements/modifier-departement/modifier-departement.component';
import { ListeDepartementComponent } from './pages/gestion-departements/liste-departement/liste-departement.component';
import { DepartementFilterPipe } from './pages/gestion-departements/pipe/departement-filter.pipe';
import { AjouterLivreComponent } from './pages/gestion-bibliotheques/ajouter-livre/ajouter-livre.component';
import { ModifierLivreComponent } from './pages/gestion-bibliotheques/modifier-livre/modifier-livre.component';
import { BibliothequeFilerPipe } from './pages/gestion-bibliotheques/bibliotheque-filer.pipe';
import { FormateurFilterPipe } from './pages/gestion-formateur/pipe/formateur-filter.pipe';
import { StagiaireFilterFilierPipe } from './pages/gestion-stagiaires/pipe/stagiaire-filter-filier.pipe';
import { ListeCoursComponent } from './pages/gestion-cours/liste-cours/liste-cours.component';
import { ModiferCoursComponent } from './pages/gestion-cours/modifer-cours/modifer-cours.component';
import { AjouterCoursComponent } from './pages/gestion-cours/ajouter-cours/ajouter-cours.component';
import { InfoGComponent } from './pages/gestion-stagiaires/info-g/info-g.component';
import { PipeCoursPipe } from './pages/gestion-cours/pipe/pipe-cours.pipe';
import { ModifierFormateurComponent } from './pages/gestion-formateur/modifier-formateur/modifier-formateur.component';
import { VacancePipe } from './pages/gestion-vacances/pipe/vacance.pipe';
import { DetailsFormateurComponent } from './pages/gestion-formateur/details-formateur/details-formateur.component';
import { AjouterVacanceComponent } from './pages/gestion-vacances/ajouter-vacance/ajouter-vacance.component';
import { ListeVacancesComponent } from './pages/gestion-vacances/liste-vacances/liste-vacances.component';
import { ModifierVacancesComponent } from './pages/gestion-vacances/modifier-vacances/modifier-vacances.component';
import { StageStagiaireComponent } from './pages/espace-stagiaires/stage-stagiaire/stage-stagiaire.component';
import { ResultatStagiaireComponent } from './pages/espace-stagiaires/resultat-stagiaire/resultat-stagiaire.component';
import { ProfilStagiaireComponent } from './pages/espace-stagiaires/profil-stagiaire/profil-stagiaire.component';
import { EmploiStagiaireComponent } from './pages/espace-stagiaires/emploi-stagiaire/emploi-stagiaire.component';
import { PrincipaleStagiaireComponent } from './pages/espace-stagiaires/index-stagiaire/principale-stagiaire.component';
import { EmploiFormateurComponent } from './pages/espace-formateurs/emploi-formateur/emploi-formateur.component';
import { IndexFormateurComponent } from './pages/espace-formateurs/index-formateur/index-formateur.component';
import { ListeStagiairesFormateurComponent } from './pages/espace-formateurs/listeStagiaires-formateur/listeStagiaires-formateur.component';
import { ProfilFormateurComponent } from './pages/espace-formateurs/profil-formateur/profil-formateur.component';
import { ReclamationFormateurComponent } from './pages/espace-formateurs/reclamation-formateur/reclamation-formateur.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FilterCorpsEnseignantPipe } from './pages/gestion-stagiaires/pipe/filter-Corps-enseignant.pipe';
import { FilterFilierPipe } from './pages/gestion-formateur/pipe/filter-filier.pipe';
import { GestionResultatsComponent } from './pages/Gestion-resultats/Gestion-resultats.component';

import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { NoteService } from './services/note.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    NotificationsComponent,
    AjouterStagiaireComponent,
    AjouterFormateurComponent,
    ListeFormateurComponent,
    ListeReclamationsComponent,
    DetailsStagiaireComponent,
    PlansFormationComponent,
    ModifierStagiaireComponent,
    StagiaireFilterPipe,
    BibliothequeComponent,
    AjouterDepartementComponent,
    ModifierDepartementComponent,
    ListeDepartementComponent,
    DepartementFilterPipe,
    AjouterLivreComponent,
    ResultatStagiaireComponent,
    ProfilStagiaireComponent,
    ModifierLivreComponent,
    EmploiStagiaireComponent,
    PrincipaleStagiaireComponent,
    BibliothequeFilerPipe,
    FormateurFilterPipe,
    FilterCorpsEnseignantPipe,
    GestionResultatsComponent,
    StageStagiaireComponent,
    EmploiFormateurComponent,
    IndexFormateurComponent,
    ListeStagiairesFormateurComponent,
    ProfilFormateurComponent,
    ReclamationFormateurComponent,
    StagiaireFilterFilierPipe,
    ListeCoursComponent,
    ModiferCoursComponent,
    AjouterCoursComponent,
    InfoGComponent,
    PipeCoursPipe,
    FilterFilierPipe,
    ModifierFormateurComponent,
    VacancePipe,
    DetailsFormateurComponent,
    AjouterVacanceComponent,
    ListeVacancesComponent,
    ModifierVacancesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtM-qh8UPEWzzVYxS4KODmtNNUvfbnKSM',
      libraries: ['places']
    }),
    FormsModule, MatTabsModule,
    HttpClientModule,
    NgbModalModule, NgbModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),

    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),



    //test 

    jqxSchedulerModule, jqxButtonModule



  ],
  providers: [VacanceService, ServiceStagiaireService, FormateurService,
    DepartementService, BibliothequeService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
