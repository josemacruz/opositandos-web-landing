export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-4 leading-tight">
            Politica de privacidad y términos de uso
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Aquí encontrarás toda la información sobre cómo manejamos tus datos
            y las condiciones de uso de nuestra plataforma.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Política de Privacidad</h2>
        <p className="mb-4">
          En Opositandos, nos tomamos muy en serio la privacidad de tus datos
          personales. Esta política describe cómo recopilamos, usamos y
          protegemos tu información.
        </p>
        <h3 className="font-semibold mb-2">1. Recopilación de datos</h3>
        <p className="mb-4">
          Recopilamos información que nos proporcionas al registrarte, como tu
          nombre, correo electrónico y datos de acceso. También podemos
          recopilar información sobre tu uso de la plataforma para mejorar
          nuestros servicios.
        </p>
        <h3 className="font-semibold mb-2">2. Uso de la información</h3>
        <p className="mb-4">
          Utilizamos tus datos para gestionar tu cuenta, ofrecerte soporte,
          mejorar la plataforma y enviarte comunicaciones relevantes. No
          compartimos tu información personal con terceros sin tu
          consentimiento, salvo obligación legal.
        </p>
        <h3 className="font-semibold mb-2">3. Seguridad</h3>
        <p className="mb-4">
          Implementamos medidas de seguridad para proteger tus datos contra
          accesos no autorizados, alteraciones o divulgación.
        </p>
        <h3 className="font-semibold mb-2">4. Derechos del usuario</h3>
        <p className="mb-4">
          Puedes acceder, rectificar o eliminar tus datos personales en
          cualquier momento contactándonos a través de los medios disponibles en
          la plataforma.
        </p>
        <h3 className="font-semibold mb-2">5. Cambios en la política</h3>
        <p className="mb-4">
          Nos reservamos el derecho de modificar esta política. Te notificaremos
          sobre cualquier cambio relevante a través de la plataforma.
        </p>
        <p>
          Si tienes dudas sobre nuestra política de privacidad, puedes
          contactarnos en cualquier momento.
        </p>
      </section>
    </div>
  );
}
