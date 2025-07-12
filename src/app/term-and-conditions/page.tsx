export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-4 leading-tight">
            Términos y Condiciones de Uso
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Aquí encontrarás toda la información sobre las condiciones de uso de
            nuestra plataforma y los derechos y responsabilidades de los
            usuarios.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
        <h2 className="text-xl font-semibold mb-4">
          1. Aceptación de los Términos
        </h2>
        <p className="mb-4">
          Al acceder y utilizar esta plataforma, aceptas cumplir con estos
          términos y condiciones. Si no estás de acuerdo con alguna parte, por
          favor no utilices el sitio.
        </p>

        <h2 className="text-xl font-semibold mb-4">2. Uso de la Plataforma</h2>
        <p className="mb-4">
          El usuario se compromete a utilizar la plataforma de manera
          responsable y conforme a la ley. No está permitido el uso para fines
          ilícitos, fraudulentos o que puedan dañar a otros usuarios o a la
          propia plataforma.
        </p>

        <h2 className="text-xl font-semibold mb-4">3. Propiedad Intelectual</h2>
        <p className="mb-4">
          Todo el contenido, materiales, textos, imágenes y recursos disponibles
          en la plataforma son propiedad de Opositandos o de sus licenciantes y
          están protegidos por derechos de autor. No está permitida su
          reproducción sin autorización previa.
        </p>

        <h2 className="text-xl font-semibold mb-4">4. Responsabilidad</h2>
        <p className="mb-4">
          Opositandos no se hace responsable de los daños o perjuicios que
          puedan derivarse del uso de la plataforma. El usuario utiliza el sitio
          bajo su propia responsabilidad.
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Modificaciones</h2>
        <p className="mb-4">
          Nos reservamos el derecho de modificar estos términos y condiciones en
          cualquier momento. Las modificaciones serán publicadas en esta página
          y el uso continuado de la plataforma implica la aceptación de los
          nuevos términos.
        </p>

        <h2 className="text-xl font-semibold mb-4">6. Contacto</h2>
        <p>
          Si tienes alguna duda sobre estos términos y condiciones, puedes
          contactarnos a través de nuestro correo electrónico de soporte.
        </p>
      </section>
    </div>
  );
}
