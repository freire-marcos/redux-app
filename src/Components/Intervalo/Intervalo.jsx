import './Intervalo.css';
import React from 'react';

import Card from '../Card/Card';

function Intervalo(props) {
  return (
    <Card titulo="Intervalo" purple>
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input type="number" value={0} />
        </span>
        <span>
          <strong>Máximo</strong>
          <input type="number" value={10} />
        </span>
      </div>
    </Card>
  );
}

export default Intervalo;
