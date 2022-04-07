import { ShardingManager } from "discord.js";
import { loadConfig } from "./misc/config.js";

let _config = loadConfig();
let shards = new Array();

if (_config) {
    let manager = new ShardingManager('./SkinPeek.js', {
        token: _config.token,
        totalShards: _config.numberOfShards,
    });

    manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

    manager.spawn();
}
