import { Departement } from './model/departement';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { FormsComponent } from './pages/gestion-stagiaires/liste-stagiaire/forms.component';
import { AjouterStagiaireComponent } from './pages/gestion-stagiaires/ajouter-stagiaire/ajouter-stagiaire.component';
import { ListeReclamationsComponent } from './pages/gestion-reclamations/liste-reclamations.component';
import { ListeFormateurComponent } from './pages/gestion-formateur/liste-formateur/liste-formateur.component';
import { AjouterFormateurComponent } from './pages/gestion-formateur/ajouter-formateur/ajouter-formateur.component';
import { PlansFormationComponent } from './pages/plans-formation/plans-formation.component';
import { ListeDepartementComponent } from './pages/gestion-departements/liste-departement/liste-departement.component';
import { ModifierDepartementComponent } from './pages/gestion-departements/modifier-departement/modifier-departement.component';
import { AjouterDepartementComponent } from './pages/gestion-departements/ajouter-departement/ajouter-departement.component';
import { BibliothequeComponent } from './pages/gestion-bibliotheques/liste-livres/bibliotheque.component';
import { ModifierStagiaireComponent } from './pages/gestion-stagiaires/modifier-stagiaire/modifier-stagiaire.component';
import { DetailsStagiaireComponent } from './pages/gestion-stagiaires/details-stagiaire/details-stagiaire.component';
import { InfoGComponent } from './pages/gestion-stagiaires/info-g/info-g.component';
import { ModifierFormateurComponent } from './pages/gestion-formateur/modifier-formateur/modifier-formateur.component';
import { DetailsFormateurComponent } from './pages/gestion-formateur/details-formateur/details-formateur.component';
import { ListeVacancesComponent } from './pages/gestion-vacances/liste-vacances/liste-vacances.component';
import { AjouterVacanceComponent } from './pages/gestion-vacances/ajouter-vacance/ajouter-vacance.component';
import { ModifierVacancesComponent } from './pages/gestion-vacances/modifier-vacances/modifier-vacances.component';
import { ListeCoursComponent } from './pages/gestion-cours/liste-cours/liste-cours.component';
import { ModiferCoursComponent } from './pages/gestion-cours/modifer-cours/modifer-cours.component';
import { AjouterCoursComponent } from './pages/gestion-cours/ajouter-cours/ajouter-cours.component';
import { StageStagiaireComponent } from './pages/espace-stagiaires/stage-stagiaire/stage-stagiaire.component';
import { ResultatStagiaireComponent } from './pages/espace-stagiaires/resultat-stagiaire/resultat-stagiaire.component';
import { ProfilStagiaireComponent } from './pages/espace-stagiaires/profil-stagiaire/profil-stagiaire.component';
import { EmploiStagiaireComponent } from './pages/espace-stagiaires/emploi-stagiaire/emploi-stagiaire.component';
import { PrincipaleStagiaireComponent } from './pages/espace-stagiaires/index-stagiaire/principale-stagiaire.component';
import { ProfilFormateurComponent } from './pages/espace-formateurs/profil-formateur/profil-formateur.component';
import { IndexFormateurComponent } from './pages/espace-formateurs/index-formateur/index-formateur.component';
import { ListeStagiairesFormateurComponent } from './pages/espace-formateurs/listeStagiaires-formateur/listeStagiaires-formateur.component';
import { EmploiFormateurComponent } from './pages/espace-formateurs/emploi-formateur/emploi-formateur.component';
import { ReclamationFormateurComponent } from './pages/espace-formateurs/reclamation-formateur/reclamation-formateur.component';
import { GestionResultatsComponent } from './pages/Gestion-resultats/Gestion-resultats.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'liste-stagiares', component: FormsComponent },
  { path: 'ajouter-stagiares', component: AjouterStagiaireComponent },
  { path: 'liste-reclamations', component: ListeReclamationsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'formateurs', component: ListeFormateurComponent },
  { path: 'ajouter-formateur', component: AjouterFormateurComponent },
  { path: 'plans-formation', component: PlansFormationComponent },
  { path: 'departements', component: ListeDepartementComponent },
  { path: 'modifier-departement/:idDep', component: ModifierDepartementComponent },
  { path: 'ajouter-departement', component: AjouterDepartementComponent },



  { path: 'bibliotheque', component: BibliothequeComponent },
  { path: 'modifier-stagiaire/:codeApoge', component: ModifierStagiaireComponent },
  { path: 'details-stagiaire', component: DetailsStagiaireComponent },
  { path: 'info-g/:codeApoge', component: InfoGComponent },
  { path: 'ajouter-formateur', component: AjouterFormateurComponent },
  { path: 'modifier-formateur/:idFormateur', component: ModifierFormateurComponent },
  { path: 'details-formateur/:idFormateur', component: DetailsFormateurComponent },


  { path: 'vacances', component: ListeVacancesComponent },
  { path: 'ajouter-vacances', component: AjouterVacanceComponent },
  { path: 'modifier-vacances/:idVac', component: ModifierVacancesComponent },

  { path: 'cours', component: ListeCoursComponent },
  { path: 'modifier-cours/:idCours', component: ModiferCoursComponent },
  { path: 'ajouter-cours', component: AjouterCoursComponent },


  //espace stagiaire

  { path: 'stage-stagiaire', component: StageStagiaireComponent },
  { path: 'resultat-stagiaire', component: ResultatStagiaireComponent },
  { path: 'profil-stagiaire', component: ProfilStagiaireComponent },
  { path: 'emploi-stagiaire', component: EmploiStagiaireComponent },
  { path: 'index-stagiaire', component: PrincipaleStagiaireComponent },


  //espace formateur

  { path: 'reclamtion', component: ReclamationFormateurComponent },
  { path: 'listeStagiaire-formateur', component: ListeStagiairesFormateurComponent },
  { path: 'profil-formateur', component: ProfilFormateurComponent },
  { path: 'emploi-formateur', component: EmploiFormateurComponent },
  { path: 'index-formateur', component: IndexFormateurComponent },
  { path: 'resultats', component: GestionResultatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
