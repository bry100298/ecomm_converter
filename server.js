const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Custom middleware to handle requests
    server.use((req, res, next) => {
      // Check if the URL contains a duplicated path segment
      if (
        req.url.includes("/ecconvtrv1/ecconvtrv1/") ||
        req.url === "/ecconvtrv1/ecconvtrv1"
      ) {
        // Redirect to 404 error page handled by Next.js
        const error = new Error();
        error.code = "ENOENT";
        next(error);
      } else {
        // Continue to the next middleware
        next();
      }
    });

    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    //Additional here
    server.use((err, req, res, next) => {
      // Handle Next.js errors
      if (err.code === "ENOENT") {
        return app.render(req, res, "/_error", {});
      }

      // For other errors, delegate to the default error handler
      next(err);
    }); //end additional

    server.listen(port, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:" + port);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
