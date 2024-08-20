import React, { Suspense } from "react";
import { useAuth } from "../../auth/context/AuthContext";
import "../styles/home.css";
const CreateEmpleadoForm = React.lazy(() =>
  import("../../empleado/components/form/CreateEmpleadoForm")
);
const EmpleadosList = React.lazy(() =>
  import("../../empleado/components/lists/EmpleadosList")
);
const CreateSolicitudForm = React.lazy(() =>
  import("../../solicitud/components/form/CreateSolicitudForm")
);
const SolicitudesList = React.lazy(() =>
  import("../../solicitud/components/lists/SolicitudesList")
);

export const Home = () => {
  const { authState } = useAuth();
  return (
    <div className="mainContainer">
      <div className="cardContainer">
        <Suspense fallback={<div>Loading...</div>}>
          {authState.role === "ADMIN" && <CreateEmpleadoForm />}
        </Suspense>

        <EmpleadosList>
          {({ id_empleado }) => {
            if (!id_empleado) {
              return null;
            }
            return (
              <div>
                <Suspense fallback={<div>Loading...</div>}>
                  {authState.role === "ADMIN" && (
                    <CreateSolicitudForm empleadoId={id_empleado} />
                  )}
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                  <SolicitudesList id_empleado={id_empleado} />
                </Suspense>
              </div>
            );
          }}
        </EmpleadosList>
      </div>
    </div>
  );
};
