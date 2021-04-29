import React from 'react';
import Image1 from '../../images/colaboradores/1.png';
import Image2 from '../../images/colaboradores/2.png';
import Image3 from '../../images/colaboradores/3.png';
import Image4 from '../../images/colaboradores/4.png';
import { Link } from 'gatsby';
import { Grid } from './styles';

export function CollabsGrid() {
  return (
    <Grid>
      <article style={{ backgroundImage: `url(${Image4})` }}>
        <Link
          aria-label="Florista del Mes"
          to="/contact"
          className="link primary"
        >
          <header className="major">
            <h4>Florista Invitado del Mes</h4>
            <p>
              ¡Ésta es una sección muy especial! Creada para tener excelentes
              colaboraciones con colegas floristas, mes con mes.
            </p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image1})` }}>
        <Link aria-label="Xolotl" className="link primary">
          <header className="major">
            <h4>Xolotl</h4>
            <p>
              Repostería mexicana que ofrece productos de calidad con un toque
              tradicional y casero. Un apapacho para cerrar nuestros días o
              iniciar nuestras mañanas.
            </p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image3})` }}>
        <Link aria-label="OCSuculentas" className="link primary">
          <header className="major">
            <h4>OC Suculentas</h4>
            <p>
              Joven empresa mexicana enfocada y motivada por enriquecer y
              armonizar espacios con elementos vivos.
            </p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image2})` }}>
        <Link aria-label="ChomiChomi" className="link primary">
          <header className="major">
            <h4>Chomi Chomi</h4>
            <p>
              Proyecto familiar, creado por una joven mexicana, enfocada en
              alta repostería.
            </p>
          </header>
        </Link>
      </article>
    </Grid>
  );
}
