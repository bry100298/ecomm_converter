<!DOCTYPE html>
<html>
<head>
  <title>Next.js Project README</title>
</head>
<body>

<h1>Next.js Project</h1>

<p>This is a <a href="https://nextjs.org/">Next.js</a> project bootstrapped with <code>create-next-app</code>.</p>

<h2>Getting Started</h2>

<p>First, run the development server:</p>

<pre><code>npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
</code></pre>

<p>Open <a href="http://localhost:3000">http://localhost:3000</a> with your browser to see the result.</p>

<p>You can start editing the page by modifying <code>app/page.tsx</code>. The page auto-updates as you edit the file.</p>

<p>This project uses <a href="https://nextjs.org/docs/basic-features/font-optimization">next/font</a> to automatically optimize and load Inter, a custom Google Font.</p>

<h2>Learn More</h2>

<p>To learn more about Next.js, take a look at the following resources:</p>

<ul>
  <li><a href="https://nextjs.org/docs">Next.js Documentation</a> - learn about Next.js features and API.</li>
  <li><a href="https://nextjs.org/learn">Learn Next.js</a> - an interactive Next.js tutorial.</li>
</ul>

<p>You can check out <a href="https://github.com/vercel/next.js/">the Next.js GitHub repository</a> - your feedback and contributions are welcome!</p>

<h2>Deploy on Vercel</h2>

<p>The easiest way to deploy your Next.js app is to use the <a href="https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme">Vercel Platform</a> from the creators of Next.js.</p>

<p>Check out our <a href="https://nextjs.org/docs/deployment">Next.js deployment documentation</a> for more details.</p>

<h1>Next.js Project Setup Guide</h1>

<p>Welcome to the Next.js project setup guide! In this document, I'll walk you through setting up a Next.js project, including configuring the server and deploying it on IIS.</p>

<h2>Creating a Next.js Project</h2>

<p>To create a new Next.js project, you can use the following command:</p>

<pre><code>npx create-next-app my-next-app
</code></pre>

<h2>Server Configuration (server.js)</h2>

<pre><code>const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() =&gt; {
  createServer(async (req, res) =&gt; {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // Handle custom routes
      if (pathname === "/login") {
        // Redirect to the login page
        app.render(req, res, "/login", query);
      } else {
        // Forward all other requests to Next.js application
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) =&gt; {
      console.error(err);
      process.exit(1);
    })
    .listen(process.env.PORT || 3000, () =&gt; {
      console.log(`> Ready on <a href="http://localhost:${process.env.PORT || 3000}">http://localhost:${process.env.PORT || 3000}</a>`);
    });
});
</code></pre>

<h2>IIS Configuration (web.config)</h2>

<pre><code>&lt;configuration&gt;
  &lt;system.webServer&gt;    
    &lt;rewrite&gt;
      &lt;rules&gt;
        &lt;!-- Rewrite rule to forward all requests to server.js --&gt;
        &lt;rule name="Rewrite to server.js"&gt;
          &lt;match url="/*" /&gt;
          &lt;action type="Rewrite" url="server.js" /&gt;
        &lt;/rule&gt;
        &lt;!-- Reverse proxy rule to forward requests to localhost:3000 --&gt;
        &lt;rule name="ReverseProxyInboundRule1" stopProcessing="true"&gt;
          &lt;match url="(.*)" /&gt;
          &lt;action type="Rewrite" url="http://localhost:3000/{R:1}" /&gt;
        &lt;/rule&gt;
      &lt;/rules&gt;
    &lt;/rewrite&gt;

    &lt;!-- iisnode configuration --&gt;
    &lt;iisnode node_env="production" nodeProcessCommandLine="&quot;C:\Program Files\nodejs\node.exe&quot;" interceptor="&quot;%programfiles%\iisnode\interceptor.js&quot;" /&gt;
    
    &lt;!-- Disable directory browsing --&gt;
    &lt;directoryBrowse enabled="false" /&gt;
  &lt;/system.webServer&gt;

  &lt;!-- Location override for iisnode handler --&gt;
  &lt;location path="" overrideMode="Deny"&gt;
    &lt;system.webServer&gt;
      &lt;handlers&gt;
        &lt;add name="iisnode" path="server.js" verb="*" modules="iisnode" /&gt;
      &lt;/handlers&gt;
    &lt;/system.webServer&gt;
  &lt;/location&gt;
&lt;/configuration&gt;
</code></pre>

<h2>Setting Up in IIS</h2>

<p>To host your Next.js application on IIS, follow these steps:</p>

<ol>
  <li>Open Internet Information Services (IIS) Manager.</li>
  <li>Under "Default Web Site," right-click and select "Add Application."</li>
  <li>Choose a name for your application and specify the physical path to your Next.js project folder, typically located in <code>C:\inetpub\wwwroot</code>.</li>
  <li>Select an application pool. If not using .NET, choose "DefaultAppPool"; otherwise, create or select an appropriate .NET application pool.</li>
  <li>Configure bindings: Use port 80 for localhost and port 443 for portal.benby.com/ecconv.</li>
</ol>

<p>With these steps, your Next.js application should be up and running on IIS!</p>

<h2>Running and Building Your Next.js Application</h2>

<p>To run your Next.js application:</p>

<pre><code>npm run dev
# or
yarn dev
</code></pre>

<p>To build your Next.js application:</p>

<pre><code>npm run build
# or
yarn build
</code></pre>

<h2>Installing iisnode Locally</h2>

<p>To install iisnode on your server, follow these steps:</p>

<ol>
  <li>Clone or download the iisnode repository from the official GitHub repository: <a href="https://github.com/tjanczuk/iisnode">https://github.com/tjanczuk/iisnode</a>.</li>
  <li>Follow the installation instructions provided in the repository's README.md file or documentation.</li>
</ol>

<p>Once installed, you'll be able to use iisnode for hosting your Node.js applications on IIS.</p>

<h2>Additional Dependencies</h2>

<p>In order to utilize certain features of this project, you'll need to install additional dependencies:</p>

<p>To install <code>iisnode</code> globally, run:</p>
<pre><code>npm install -g iisnode</code></pre>
<p><strong>Description:</strong> <em>iisnode is needed for hosting Node.js applications in IIS, particularly useful for Windows servers.</em></p>

<p>To install <code>rimraf</code> globally, run:</p>
<pre><code>npm install -g rimraf</code></pre>
<p><strong>Description:</strong> <em>rimraf is a cross-platform tool for deleting files and directories. The command <code>rimraf .next</code> is used to remove the <code>.next</code> directory.</em></p>

<p>To install <code>express</code>, run:</p>
<pre><code>npm install express</code></pre>
<p><strong>Description:</strong> <em>express is a web application framework for Node.js, used for building web applications and APIs.</em></p>
</body>
</html>



npm install --save @fortawesome/fontawesome-free