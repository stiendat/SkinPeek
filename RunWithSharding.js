const { ShardingManager } = require('discord.js');
const { loadConfig, default: config } = require('./misc/config');

let _config = loadConfig();

if (_config) {
    const manager = new ShardingManager('./SkinPeek.js', { token: _config.token });

    manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

    for (let i = 0; i < _config.numberOfShards; i++) {
        manager.spawn();
    }
}
