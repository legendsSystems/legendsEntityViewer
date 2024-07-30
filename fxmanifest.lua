fx_version "cerulean"

game "gta5"

lua54 "yes"

shared_scripts {
	"@qb-core/shared/locale.lua",
	"locales/**.lua"
}

server_scripts {
	"server/**.lua"
}

client_scripts {
	"client/**.lua"
}

files {
	"ui/**"
}

ui_page "ui/index.html"
