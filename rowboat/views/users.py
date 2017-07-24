from flask import Blueprint, g, jsonify

from rowboat.models.guild import Guild
from rowboat.util.decos import authed

users = Blueprint('users', __name__, url_prefix='/api/users')


@users.route('/@me')
@authed
def users_me():
    return jsonify(g.user.serialize())


@users.route('/@me/guilds')
@authed
def users_me_guilds():
    if g.user.admin:
        guilds = Guild.select().order_by(Guild.guild_id)
    else:
        guilds = Guild.select(
            Guild, Guild.config['web'][str(g.user.user_id)].alias('role')
        ).where(
            (Guild.enabled == 1) &
            (~(Guild.config['web'][str(g.user.user_id)] >> None))
        )

    return jsonify([i.serialize() for i in guilds])
