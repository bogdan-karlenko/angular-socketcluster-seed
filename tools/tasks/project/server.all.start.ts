import { serveAll } from '../../utils';
import Config from '../../config';

/**
 * Executes the build process, serving the files of the development environment using an `express` server.
 */
serveAll(Config.PROXY_NAME);
