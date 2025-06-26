import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "https://relatosdepapelmvp.saltcorn.com/api";

const SLEEP_DURATION = 1;

export default function () {
  let url = BASE_URL + `/Libros`;
  // Request No. 1
  let request = http.get(url);
  check(request, {
    OK: (r) => r.status === 200,
    'status es 200': (r) => r.status === 200,
    'respuesta < 2s': (r) => r.timings.duration < 2000,
  });
  sleep(SLEEP_DURATION);
}
