// REST was defined in 2000 by Roy Fielding and is considerably simpler. It’s not a standard but a set of recommendations and constraints for RESTful web services. These include:

// Client-Server. SystemA makes an HTTP request to a URL hosted by SystemB, which returns a response.

// It’s identical to how a browser works. The application makes a request for a specific URL. The request is routed to a web server that returns an HTML page. That page may contain references to images, style sheets, and JavaScript, which incur further requests and responses.

// Stateless. REST is stateless: the client request should contain all the information necessary to respond to a request. In other words, it should be possible to make two or more HTTP requests in any order and the same responses will be received.

// Cacheable. A response should be defined as cacheable or not.

// Layered. The requesting client need not know whether it’s communicating with the actual server, a proxy, or any other intermediary.

