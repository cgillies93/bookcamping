"""Add foreign key to Site

Revision ID: d445d1f7b3bc
Revises: 7639fe6dfd5f
Create Date: 2020-09-24 19:25:09.577557

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd445d1f7b3bc'
down_revision = '7639fe6dfd5f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('Site', sa.Column('campground_id', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'Site', 'Campground', ['campground_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'Site', type_='foreignkey')
    op.drop_column('Site', 'campground_id')
    # ### end Alembic commands ###
