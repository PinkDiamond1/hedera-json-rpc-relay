/*-
  *
  * Hedera JSON RPC Relay
  *
  * Copyright (C) 2022 Hedera Hashgraph, LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *
  */

enum CACHE_KEY {
    GAS_PRICE = 'gas_price'
}
enum CACHE_TTL {
    ONE_HOUR = 3_600_000
}

export default {
    TINYBAR_TO_WEIBAR_COEF: 10_000_000_000,
    CACHE_KEY,
    CACHE_TTL,
};
