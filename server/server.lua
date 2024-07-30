RegisterCommand("entv", function(source, args, rawCommand)
	TriggerClientEvent("legends:EntityView", source)
end, "admin")