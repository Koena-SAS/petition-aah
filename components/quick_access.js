/**
 * Quick access for people using screen reader.
 */
export default function QuickAccess() {
  return (
    <div role="region" aria-label="Accès rapide" className="visually-hidden">
      <ul>
        <li>
          <a href="#header">Aller à l'en-tête</a>
        </li>
        <li>
          <a href="#content">Aller au contenu textuel</a>
        </li>
        <li>
          <a href="#counter">Aller au compteur</a>
        </li>
        <li>
          <a href="#footer">Aller au pied de page</a>
        </li>
      </ul>
    </div>
  );
}
