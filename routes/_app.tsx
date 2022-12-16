import { AppProps } from "$fresh/server.ts";

const App = ({ Component }: AppProps) => {
  const tVHScript = `
    function tVH() {
      document.body.style.setProperty('--tVH', window.innerHeight + 'px')
    };
    tVH();
    window.addEventListener('resize', tVH);
  `;
  return (
    <html>
      <body style="--tVH: 100vh;">
        <script type="text/javascript">
          {tVHScript}
        </script>
        <Component />
      </body>
    </html>
  );
};

export default App;
